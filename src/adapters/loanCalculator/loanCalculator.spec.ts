// Adapters
import { LoanCalculatorAdapter } from '../../adapters/loanCalculator/loanCalculator';

// Domain
import { LoanCalculator } from '../../domain/ports/loanCalculator';
import { LoanCalculatorResponse } from '../../domain/loanCalculatorResponse';

describe('LoanCalculator', () => {
  let loanCalculator: LoanCalculator;

  beforeEach(() => {
    loanCalculator = new LoanCalculatorAdapter();
  });

  describe('calculate', () => {
    it('should return a loan calculator response', async () => {
      const result: LoanCalculatorResponse = {
        numberOfLoanInstallments: 5,
        numberOfSchoolInstallments: 5,
        priceOfSchoolInstallments: 5,
        priceOfLoanInstallments: 5,
      };

      expect(await loanCalculator.calculate({
        courseId: "1",
        tuitionFeeSugestedByUser: 1,
      })).toStrictEqual(result);
    });
  });
});