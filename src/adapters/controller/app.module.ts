import { Module } from "@nestjs/common";
import { SimulationController } from "./simulation/simulation.controller";
import { ConfigServiceModule } from "./config/configService.module";

@Module({
    imports: [ConfigServiceModule.register()],
    controllers: [SimulationController],
})
export class AppModule {}
