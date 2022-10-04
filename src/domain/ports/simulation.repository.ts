import { Simulation } from "../simulation/simulation";
import { CreateSimulation } from "../simulation/createSimulation";
import { LoanCalculatorResponse } from "../loanCalculatorResponse";

export interface SimulationRepository {
    save(
        simulation: CreateSimulation,
        loanCalculatorResponse: LoanCalculatorResponse,
    ): Promise<Simulation>;
}
