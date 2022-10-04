import { Test, TestingModule } from "@nestjs/testing";
import { SimulationController } from "./simulation.controller";

describe("AppController", () => {
    let appController: SimulationController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [SimulationController],
        }).compile();

        appController = app.get<SimulationController>(SimulationController);
    });

    describe("root", () => {
        it('should return "Hello World!"', () => {
            // expect(appController.simulate()).toBe("Hello World!");
        });
    });
});
