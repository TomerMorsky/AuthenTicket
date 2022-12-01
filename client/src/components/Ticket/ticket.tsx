import React, { FC } from "react";

interface TicketProps {
    date: Date;
    holderName: string
}

const Ticket: FC<TicketProps> = ({date, holderName}) =>{

    return (
        <div>

        </div>
    )
}

export default Ticket;