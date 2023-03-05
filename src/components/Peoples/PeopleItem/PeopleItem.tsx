import React, {FC} from 'react';
import {IPeople} from "../../../types/IPeople";

interface PeopleItemType {
    people: IPeople
}

const PeopleItem: FC <PeopleItemType> = ({people}) => {
    return (
        <div>
            {people.name}
            <button>Reed More</button>
        </div>
    );
};

export default PeopleItem;