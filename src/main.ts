import { NestFactory } from "@nestjs/core";
import { AppModule } from "./adapters/controller/app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

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
