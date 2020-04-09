import moment from 'moment';
import { setStartDate,setEndDate,setTextFilter } from '../../actions/filters';

test('should  generate set start date', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    });


});

test('should  generate set end date', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    });


});

test('should  generate set text filter with text value', () => {
     const text = 'Something in';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type:'SET_TEXT',
        text
    });


});

test('should  generate set text filter with defaults value', () => {
 
   const action = setTextFilter();
   expect(action).toEqual({
       type:'SET_TEXT',
       text: ''
   });


});



