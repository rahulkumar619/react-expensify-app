import moment from 'moment';


export default (exepenses,{text,sortBy,startDate,endDate}) => {
    return exepenses.filter((exepense) => {
        const createdAtMoment = moment(exepense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
        const endDateMatch = endDate ? endDate.isSameOrBefore(createdAtMoment, 'day') : true ;
        const textMatch = exepense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    

    }).sort((a,b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy ===  'amount') {
            return a.amount < b.amount ? 1 : -1;
        }

    });
};
