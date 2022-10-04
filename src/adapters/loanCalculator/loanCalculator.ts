import { Injectable } from "@nestjs/common";
import { LoanCalculatorResponse } from "src/domain/loanCalculatorResponse";
import { LoanCalculator } from "src/domain/ports/loanCalculator";
import { CreateSimulation } from "src/domain/simulation/createSimulation";

@Injectable()
export class LoanCalculatorAdapter implements LoanCalculator {
    async calculate(simulation: CreateSimulation): Promise<LoanCalculatorResponse> {
        return {
            numberOfLoanInstallments: 5,
            numberOfSchoolInstallments: 5,
            priceOfSchoolInstallments: 5,
            priceOfLoanInstallments: 5,
        };
    }
}
