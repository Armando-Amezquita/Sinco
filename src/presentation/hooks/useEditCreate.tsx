import { useEffect, useState } from "react";
import { createVehicle, updateVehicle } from "../../actions/edit-create-vehicle";
import { SelectChangeEvent } from "@mui/material";
import { getVehicleById } from "../../actions/get-vehicle-by-id";
import { ResponseAPIVehicles } from "../../infrastructure/interfaces/api-interfaces";
import { vehiculos, cilindrajes } from "../../infrastructure/temporalData/temporalData";


export const useEditCreate = (vehicleId?: string) => {

    const [model, setModel] = useState<{ model: string; type: string; price: number } | null>(null);
    const [isNew, setIsNew] = useState("");
    const [value, setValue] = useState("");
    const [valueUsed, setValueUsed] = useState("");
    const [popular, setPopular] = useState("");
    const [sold, setSold] = useState("");
    const [calification, setCalification] = useState("");
    const [km, setKm] = useState("");
    const [cilindraje, setCilindraje] = useState("");
    const [updateFlag, setUpdateFlag] = useState(false);


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
            setCilindraje("");
            setUpdateFlag((prev) => !prev);

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
    updateFlag,

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
