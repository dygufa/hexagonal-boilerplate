import { Simulation } from "../../domain/simulation/simulation";
import { CreateSimulation } from "../../domain/simulation/createSimulation";
import { SimulationRepository } from "../../domain/ports/simulation.repository";
import { LoanCalculator } from "../../domain/ports/loanCalculator";

export class SimulateService {
    constructor(
        private readonly repository: SimulationRepository,
        private loanCalculator: LoanCalculator,
    ) {}

    async create(simulation: CreateSimulation): Promise<Simulation> {
        const loanCalculatorResponse = await this.loanCalculator.calculate(simulation);
        return this.repository.save(simulation, loanCalculatorResponse);
    }
}
