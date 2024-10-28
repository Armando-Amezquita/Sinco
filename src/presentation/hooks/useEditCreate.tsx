import { useEffect, useState } from "react";
import { createVehicle, updateVehicle } from "../../actions/edit-create-vehicle";
import { SelectChangeEvent } from "@mui/material";
import { getVehicleById } from "../../actions/get-vehicle-by-id";
import { ResponseAPIVehicles } from "../../infrastructure/interfaces/api-interfaces";

export const useEditCreate = (vehicleId?: string) => {

    const vehiculos = [
        // Vehículos
        { type: "car", model: "Mazda 3 híbrido", price: 100000000 },
        { type: "car", model: "Toyota Corolla", price: 95000000 },
        { type: "car", model: "Renault Sandero", price: 60000000 },
        { type: "car", model: "Chevrolet Onix", price: 75000000 },
        { type: "car", model: "Ford Escape híbrido", price: 120000000 },
        { type: "car", model: "Kia Sportage", price: 105000000 },
        { type: "car", model: "Honda Civic", price: 98000000 },
        { type: "car", model: "Volkswagen Jetta", price: 90000000 },
        { type: "car", model: "Hyundai Tucson", price: 110000000 },
        { type: "car", model: "Nissan Sentra", price: 87000000 },
        
        // Motocicletas
        { type:"motorcicle", model: "Yamaha MT-03", price: 27000000 },
        { type:"motorcicle", model: "Honda CB 300R", price: 21000000 },
        { type:"motorcicle", model: "Suzuki Gixxer 250", price: 19000000 },
        { type:"motorcicle", model: "Kawasaki Ninja 400", price: 28000000 },
        { type:"motorcicle", model: "BMW G 310 R", price: 24000000 },
        { type:"motorcicle", model: "KTM Duke 390", price: 26000000 },
        { type:"motorcicle", model: "Royal Enfield Himalayan", price: 23000000 },
        { type:"motorcicle", model: "Benelli TNT 300", price: 22000000 },
        { type:"motorcicle", model: "Bajaj Dominar 250", price: 15000000 },
        { type:"motorcicle", model: "Hero Xpulse 200", price: 10000000 }
    ];

    const cilindrajes = [ "50cc", "100cc", "110cc", "125cc", "150cc", "160cc", "180cc", "200cc", "250cc", "300cc", "310cc", "350cc", "390cc"];

    const [model, setModel] = useState<{ model: string; type: string; price: number } | null>(null);
    const [isNew, setIsNew] = useState("");
    const [value, setValue] = useState("");
    const [valueUsed, setValueUsed] = useState("");
    const [popular, setPopular] = useState("");
    const [sold, setSold] = useState("");
    const [calification, setCalification] = useState("");
    const [km, setKm] = useState("");
    const [cilindraje, setCilindraje] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(isNew === "Si"){
            setKm("")
            setValueUsed("");
        }

        if(model?.type === "car"){
            setCilindraje("")
        }

        let kmNumber = parseFloat(km);

        if (isNew === "No" && isNaN(kmNumber)) {
            alert("Por favor, ingresa un valor válido para el kilometraje.");
            return;
        }
        

        const calificationNumber = parseFloat(calification)

        if (isNaN(calificationNumber)) {
            alert("Por favor, ingresa un valor válido para la calificacion.");
            return;
        }

        if (isNew === "No" && model) {
            const modelPrice = model.price;
    
            // Validar que el valor usado no sea menor al 85% del precio del modelo
            const minValueUsed = modelPrice * 0.85; // 85% del precio del modelo
            const valueUsedNumber = parseFloat(valueUsed); // Convertir a número
    
            if (valueUsedNumber < minValueUsed) {
                alert(`El valor de un vehículo usado no puede ser menor al 85% del valor indicado en la lista de precios. Mínimo: ${minValueUsed.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}`);
                return;
            }
    
            // Validar que el valor usado no sea mayor a $250.000.000
            if (valueUsedNumber > 250000000) {
                alert('No se pueden registrar vehículos con un valor mayor a $250.000.000');
                return;
            }
        }

        if (!model || !model.model || !model.type) {
            alert("Por favor, selecciona un modelo válido.");
            return;
        }

        const savedVehicle = {
            _id: vehicleId ?? null, 
            model: model.model,
            km: kmNumber ?? 0,
            value: isNew === "Si" ? value : valueUsed,
            popular: popular === "Si",
            cilindraje: cilindraje,
            vehicleNew: isNew === "Si",
            sold: sold === "Si",
            typeVehicle: model.type,
            calification: calificationNumber
        }

        if(vehicleId){
            await updateVehicle(savedVehicle);
        }else{
            await createVehicle(savedVehicle);
            setModel(null)
            setIsNew("")
            setValue("")
            setValueUsed("")
            setPopular("")
            setSold("")
            setCalification("")
            setKm("")
            setCilindraje("")
        }
    }

    const handleChangeModel = (event: SelectChangeEvent<string>) => {
        const selectedModel = event.target.value;
        const vehicle = vehiculos.find(vehiculo => vehiculo.model === selectedModel);
        setModel(vehicle || null);
    };
    
    useEffect(() => {
        const fetchVehicleData = async () => {
            if (vehicleId) {
                const vehicleData: ResponseAPIVehicles = await getVehicleById(vehicleId);
                if (vehicleData) {
                    // Llenar los estados con los datos del vehículo
                    setModel({ model: vehicleData.model, type: vehicleData.typeVehicle, price: parseFloat(vehicleData.value) });
                    setIsNew(vehicleData.vehicleNew ? "Si" : "No");
                    if(vehicleData.vehicleNew){
                        setValue(vehicleData.value);
                    }else{
                        setValueUsed(vehicleData.value);
                    }
                    setPopular(vehicleData.popular ? "Si" : "No");
                    setSold(vehicleData.sold ? "Si" : "No");
                    setCalification(vehicleData.calification.toString());
                    setKm(vehicleData.km != null ? vehicleData.km.toString() : '');
                    setCilindraje(vehicleData.cilindraje || "");
                }
            }
        };
    
        fetchVehicleData();
    }, [vehicleId]);

  return {
    //Properties
    model,
    isNew,
    value,
    valueUsed,
    popular,
    sold,
    calification,
    km,
    cilindraje,
    vehiculos, 
    cilindrajes,

    //Methods
    setModel,
    setIsNew, 
    setValue,
    setValueUsed,
    setPopular,
    setSold,
    setCalification,
    setKm,
    setCilindraje,
    handleSubmit,
    handleChangeModel

  }
}
