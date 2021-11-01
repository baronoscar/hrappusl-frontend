
export interface User{
    email: string,
    password: string
}

export interface Loans{
    first_name: string,
    last_name: string,
    company_role: string,
    loan_type: string,
    amount: number,
    repayment_plan_type: 'monthly' | 'quarterly' | 'weekly',
    reason: string
}


export const users: Array<User> = [
    {email: 'oscar.ubuzor@unionsystems.com', password: 'oscar'},
    {email: 'okechukwu.udeze@unionsystems.com', password: 'okechukwu'}
];

export const Loans = {
    activeLoans: {

    },
    newLoans: [
        { first_name: 'Oscar', last_name: 'Udeze'}
    ]
}