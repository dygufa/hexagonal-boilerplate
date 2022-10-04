import { CreateSimulation } from "src/domain/simulation/createSimulation";
import { ApiProperty } from "@nestjs/swagger";

export class CreateSimulationDTO implements CreateSimulation {
    @ApiProperty({
        description: "O ID do Lead caso seja conhecido",
        required: false,
    })
    leadId?: string;

    @ApiProperty({
        description: "O ID do usuário caso seja conhecido",
        required: false,
    })
    userId?: string;

    @ApiProperty({
        description: "O ID do curso a ser simulado",
        required: false,
    })
    courseId: string;

    @ApiProperty({
        description: "Valor de mensalidade a ser financiada de acordo com sugestão do aluno",
        required: false,
    })
    tuitionFeeSugestedByUser: number;
}
