import { Body, Controller, Post, Inject } from "@nestjs/common";
import { CreateSimulationDTO } from "./createSimulation.dto";
import { SimulateService } from "../../../useCases/simulateService/simulateService";
import { ConfigServiceModule } from "../config/configService.module";
import { Simulation } from "../../../domain/simulation/simulation";

@Controller("simulation")
export class SimulationController {
    constructor(
        @Inject(ConfigServiceModule.SIMULATE_SERVICE)
        private readonly simulateService: SimulateService,
    ) {}

    @Post()
    async simulate(@Body() simulation: CreateSimulationDTO): Promise<Simulation> {
        return this.simulateService.create(simulation);
    }
}
