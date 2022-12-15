import { DynamicModule, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { LoanCalculatorAdapter } from "src/adapters/loanCalculator/loanCalculator";
import { TypeOrmConfigModule } from "src/adapters/repository/typeorm/config/typeormConfig.module";
import SimulationRepositoryTypeORM from "src/adapters/repository/typeorm/simulation.repository.typeorm";
import { SimulateService } from "src/useCases/simulateService/simulateService";

@Module({
    imports: [TypeOrmConfigModule],
    providers: [LoanCalculatorAdapter],
})
export class ConfigServiceModule {
    static SIMULATE_SERVICE = "SimulateService";

    static register(): DynamicModule {
        return {
            module: ConfigServiceModule,
            imports: [
                ConfigModule.forRoot({
                    isGlobal: true,
                }),
            ],
            providers: [
                {
                    inject: [SimulationRepositoryTypeORM, LoanCalculatorAdapter],
                    provide: ConfigServiceModule.SIMULATE_SERVICE,
                    useFactory: (
                        simulationRepository: SimulationRepositoryTypeORM,
                        loanCalculator: LoanCalculatorAdapter,
                    ) => new SimulateService(simulationRepository, loanCalculator),
                },
            ],
            exports: [ConfigServiceModule.SIMULATE_SERVICE],
        };
    }
}
