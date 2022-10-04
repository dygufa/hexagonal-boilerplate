import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SimulationEntity } from "../entities/simulation.entity";
import SimulationRepositoryTypeORM from "../simulation.repository.typeorm";
import { SIMULATION_DB_CONFIG } from "./dataSource";

@Module({
    imports: [
        TypeOrmModule.forRoot(SIMULATION_DB_CONFIG),
        TypeOrmModule.forFeature([SimulationEntity]),
    ],
    providers: [SimulationRepositoryTypeORM],
    exports: [SimulationRepositoryTypeORM],
})
export class TypeOrmConfigModule {}
