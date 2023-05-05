import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Simulation } from "../../../domain/simulation/simulation";
import { CreateSimulation } from "../../../domain/simulation/createSimulation";
import { SimulationRepository } from "../../../domain/ports/simulation.repository";
import { Repository } from "typeorm";
import { SimulationEntity } from "./entities/simulation.entity";
import { LoanCalculatorResponse } from "../../../domain/loanCalculatorResponse";

@Injectable()
export default class SimulationRepositoryTypeORM implements SimulationRepository {
    private readonly logger = new Logger(SimulationRepositoryTypeORM.name);

    constructor(
        @InjectRepository(SimulationEntity)
        private readonly simulationEntityRepository: Repository<SimulationEntity>,
    ) {}

    async save(
        simulation: CreateSimulation,
        loanCalculatorResponse: LoanCalculatorResponse,
    ): Promise<Simulation> {
        const simulationEntity: SimulationEntity = this.mapToSimulationEntity(
            simulation,
            loanCalculatorResponse,
        );
        const simulationSaved: SimulationEntity = await this.simulationEntityRepository.save(
            simulationEntity,
        );
        return this.mapToSimulation(simulationSaved);
    }

    private mapToSimulationEntity(
        simulation: CreateSimulation | Simulation,
        loanCalculatorResponse: LoanCalculatorResponse,
    ): SimulationEntity {
        const simulationEntity: SimulationEntity = new SimulationEntity();
        simulationEntity.leadId = simulation.leadId;
        simulationEntity.userId = simulation.userId;
        simulationEntity.courseId = simulation.courseId;
        simulationEntity.tuitionFeeSugestedByUser = simulation.tuitionFeeSugestedByUser;
        simulationEntity.numberOfLoanInstallments = loanCalculatorResponse.numberOfLoanInstallments;
        simulationEntity.numberOfSchoolInstallments =
            loanCalculatorResponse.numberOfSchoolInstallments;
        simulationEntity.priceOfSchoolInstallments =
            loanCalculatorResponse.priceOfSchoolInstallments;
        simulationEntity.priceOfLoanInstallments = loanCalculatorResponse.priceOfLoanInstallments;

        return simulationEntity;
    }

    private mapToSimulation(simulationEntity: SimulationEntity): Simulation {
        const simulation: Simulation = new Simulation();

        simulation.id = simulationEntity.id;
        simulation.leadId = simulationEntity.leadId;
        simulation.userId = simulationEntity.userId;
        simulation.courseId = simulationEntity.courseId;
        simulation.tuitionFeeSugestedByUser = simulationEntity.tuitionFeeSugestedByUser;
        simulation.numberOfLoanInstallments = simulationEntity.numberOfLoanInstallments;
        simulation.numberOfSchoolInstallments = simulationEntity.numberOfSchoolInstallments;
        simulation.priceOfSchoolInstallments = simulationEntity.priceOfSchoolInstallments;
        simulation.priceOfLoanInstallments = simulationEntity.priceOfLoanInstallments;

        return simulation;
    }
}
