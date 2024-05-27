import { Dispatch, SetStateAction, createContext, useState } from "react";

const initialResources = ["A", "B", "C", "D", "E", "F"];

interface ResourceContextType {
  resources: string[];
  setResources: Dispatch<SetStateAction<string[]>>;
}

const RESOURCES_STORAGE_KEY = "resources";
let initialState: string[];
const storedResources = localStorage.getItem(RESOURCES_STORAGE_KEY);
if (storedResources) {
  initialState = JSON.parse(storedResources);
} else {
  initialState = initialResources;
  localStorage.setItem(RESOURCES_STORAGE_KEY, JSON.stringify(initialResources));
}

export const ResourceContext = createContext<ResourceContextType>({
  resources: initialState,
  setResources: () => {},
});

export const ResourceContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [resources, setResources] = useState(initialState);

  return (
    <ResourceContext.Provider value={{ resources, setResources }}>
      {children}
    </ResourceContext.Provider>
  );
};

export default ResourceContextProvider;
