import { create } from 'zustand';
import { ResponseAPIVehicles } from '../infrastructure/interfaces/api-interfaces';

interface StoreState {
  totalVehicles: ResponseAPIVehicles[];
  vehiclesPopular: ResponseAPIVehicles[];
  vehiclesNotPopular: ResponseAPIVehicles[];
  vehiclesSold: ResponseAPIVehicles[];
  motos: ResponseAPIVehicles[];
  cars: ResponseAPIVehicles[];

  setTotalVehicles: (vehicles: ResponseAPIVehicles[]) => void;
  setVehiclesNotPopular: (vehicles: ResponseAPIVehicles[]) => void;
  setVehiclesPopular: (vehicles: ResponseAPIVehicles[]) => void;
  setVehiclesSold: (vehicles: ResponseAPIVehicles[]) => void;
  setMotos: (vehicles: ResponseAPIVehicles[]) => void;
  setCars: (vehicles: ResponseAPIVehicles[]) => void;
}

const useStore = create<StoreState>((set) => ({
  // Estados iniciales
  totalVehicles: [],
  vehiclesPopular: [],
  vehiclesSold: [],
  vehiclesNotPopular: [],
  motos: [],
  cars: [],

  // Métodos para actualizar el estado
  setTotalVehicles: (vehicles) => set({ totalVehicles: vehicles }),
  setVehiclesPopular: (vehicles) => set({ vehiclesPopular: vehicles }),
  setVehiclesNotPopular: (vehicles) => set({ vehiclesNotPopular: vehicles }),
  setVehiclesSold: (vehicles) => set({ vehiclesSold: vehicles }),
  setMotos: (vehicles) => set({ motos: vehicles }),
  setCars: (vehicles) => set({ cars: vehicles }),
}));

export default useStore;
