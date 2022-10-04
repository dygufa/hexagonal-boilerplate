import { LoanCalculatorResponse } from "../loanCalculatorResponse";
import { CreateSimulation } from "../simulation/createSimulation";

export interface LoanCalculator {
    calculate(simulation: CreateSimulation): Promise<LoanCalculatorResponse>;
}
