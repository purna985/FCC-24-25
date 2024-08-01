import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/events', (req, res) => {

    const calendarEvents = [
        { "date": "7/1/2024", "title": "Event 1" },
        { "date": "7/2/2024", "title": "Event 2" },
        { "date": "7/3/2024", "title": "Event 3" },
        { "date": "7/4/2024", "title": "Event 4" },
        { "date": "7/5/2024", "title": "Event 5" },
        { "date": "7/6/2024", "title": "Event 6" },
        { "date": "7/7/2024", "title": "Event 7" },
        { "date": "7/8/2024", "title": "Event 8" },
        { "date": "7/9/2024", "title": "Event 9" },
        { "date": "7/10/2024", "title": "Event 10" },
        { "date": "7/11/2024", "title": "Event 11" },
        { "date": "7/12/2024", "title": "Event 12" },
        { "date": "7/13/2024", "title": "Event 13" },
        { "date": "7/14/2024", "title": "Event 14" },
        { "date": "7/15/2024", "title": "Event 15" },
        { "date": "7/16/2024", "title": "Event 16" },
        { "date": "7/17/2024", "title": "Event 17" },
        { "date": "7/18/2024", "title": "Event 18" },
        { "date": "7/19/2024", "title": "Event 19" },
        { "date": "7/20/2024", "title": "Event 20" },
        { "date": "7/21/2024", "title": "Event 21" },
        { "date": "7/22/2024", "title": "Event 22" },
        { "date": "7/23/2024", "title": "Event 23" },
        { "date": "7/24/2024", "title": "Event 24" },
        { "date": "7/25/2024", "title": "Event 25" },
        { "date": "7/26/2024", "title": "Event 26" },
        { "date": "7/27/2024", "title": "Event 27" },
        { "date": "7/28/2024", "title": "Event 28" },
        { "date": "7/29/2024", "title": "Event 29" },
        { "date": "7/30/2024", "title": "Event 30" }
      ];
    
    res.json(calendarEvents);
});

app.listen(3000, () => console.log('App listening on port 3000!'));