import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SimulationEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    leadId?: string;

    @Column()
    userId?: string;

    @Column()
    courseId: string;

    @Column()
    tuitionFeeSugestedByUser: number;

    @Column()
    numberOfLoanInstallments?: number;

    @Column()
    numberOfSchoolInstallments?: number;

    @Column()
    priceOfSchoolInstallments?: number;

    @Column()
    priceOfLoanInstallments?: number;
}
