import * as dotenv from "dotenv";
dotenv.config();

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./adapters/controller/app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { NewrelicInterceptor } from "./adapters/controller/config/newrelicInterceptor";
import { isProd } from "./adapters/utils/isProd";
import {
    throwForNonDefinedRequiredInGeneralEnvVars,
    throwForNonDefinedRequiredInProductionEnvVars,
} from "./adapters/utils/throwForNonDefinedRequiredEnvVars";

async function bootstrap() {
    throwForNonDefinedRequiredInGeneralEnvVars();
    if (isProd()) {
        throwForNonDefinedRequiredInProductionEnvVars();
    }

    const app = await NestFactory.create(AppModule);

    if (isProd()) {
        app.useGlobalInterceptors(new NewrelicInterceptor());
    }

    const config = new DocumentBuilder()
        .setTitle("Serviço de simulação de financiamento")
        .setDescription("Recebe dados do produto e retorna a simulação de financiamento")
        .setVersion("1.0")
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api", app, document);

    await app.listen(3000);
}
bootstrap();
