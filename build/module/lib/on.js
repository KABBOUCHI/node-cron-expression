import { DayOfTheMonthExpression, DayOfTheWeekExpression } from './expression';
export const on = {
    dayOfTheMonth: (dayOfTheMonth) => {
        return new DayOfTheMonthExpression({
            minute: '0',
            hour: '0',
            dayOfTheMonth: `${Array.isArray(dayOfTheMonth) ? dayOfTheMonth.join(',') : dayOfTheMonth}`,
        });
    },
    dayOfTheWeek: (dayOfTheWeek) => {
        return new DayOfTheWeekExpression({
            minute: '0',
            hour: '0',
            dayOfTheWeek: `${Array.isArray(dayOfTheWeek) ? dayOfTheWeek.join(',') : dayOfTheWeek}`,
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUsvRSxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUc7SUFDaEIsYUFBYSxFQUFFLENBQUMsYUFBOEIsRUFBRSxFQUFFO1FBQ2hELE9BQU8sSUFBSSx1QkFBdUIsQ0FBQztZQUNqQyxNQUFNLEVBQUUsR0FBRztZQUNYLElBQUksRUFBRSxHQUFHO1lBQ1QsYUFBYSxFQUFFLEdBQ2IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFDM0QsRUFBRTtTQUNILENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxZQUFZLEVBQUUsQ0FBQyxZQUE0QixFQUFFLEVBQUU7UUFDN0MsT0FBTyxJQUFJLHNCQUFzQixDQUFDO1lBQ2hDLE1BQU0sRUFBRSxHQUFHO1lBQ1gsSUFBSSxFQUFFLEdBQUc7WUFDVCxZQUFZLEVBQUUsR0FDWixLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUN6RCxFQUFFO1NBQ0gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMifQ==