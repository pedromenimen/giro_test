import { ReactNode } from 'react';
import { SimulationProvider } from './simulation';
interface Props {
  children: ReactNode;
}
const Provider = ({ children }: Props) => {
  return <SimulationProvider>{children}</SimulationProvider>;
};

export default Provider;
