import { DataSource, DataSourceOptions } from "typeorm";
import * as dotenv from "dotenv";
dotenv.config();

export const SIMULATION_DB_CONFIG: DataSourceOptions = {
    type: "postgres",
    logging: true,
    host: process.env.SIMULATION_DATABASE_HOST,
    port: parseInt(process.env.SIMULATION_DATABASE_PORT, 10),
    username: process.env.SIMULATION_DATABASE_USERNAME,
    password: process.env.SIMULATION_DATABASE_PASSWORD,
    database: process.env.SIMULATION_DATABASE_DB,
    entities: [__dirname + "/../entities/*.entity{.ts,.js}"],
    migrations: [__dirname + "/../migrations/*{.ts,.js}"],
};

const AppDataSource = new DataSource(SIMULATION_DB_CONFIG);

export default AppDataSource;
