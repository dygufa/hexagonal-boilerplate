// Domain
import { Simulation } from '../../domain/simulation/simulation';
import { LoanCalculator } from '../../domain/ports/loanCalculator';

// Adapters
import { SimulationEntity } from '../../adapters/repository/typeorm/entities/simulation.entity';
import AppDataSource from '../../adapters/repository/typeorm/config/dataSource';
import SimulateRepository from '../../adapters/repository/typeorm/simulation.repository.typeorm';
import { LoanCalculatorAdapter } from '../../adapters/loanCalculator/loanCalculator';

// Service
import { SimulateService } from './simulateService';

describe('SimulateService', () => {
  let simulateRepository: SimulateRepository;
  let simulateService: SimulateService;
  let loanCalculator: LoanCalculator;

  beforeEach(() => {
    loanCalculator = new LoanCalculatorAdapter();
    simulateRepository = new SimulateRepository(AppDataSource.getRepository(SimulationEntity));
    simulateService = new SimulateService(simulateRepository, loanCalculator);
  });

  describe('create', () => {
    it('should return a loan', async () => {
      const result: Simulation = {
        id: "1",
        courseId: "1",
        tuitionFeeSugestedByUser: 1,
      };

      jest.spyOn(simulateRepository, 'save').mockImplementation(async () => result);

      expect(await simulateService.create({
        courseId: "1",
        tuitionFeeSugestedByUser: 1,
      })).toBe(result);
    });
  });
});