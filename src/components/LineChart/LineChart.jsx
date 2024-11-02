import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';

const LineChart = () => {
    const students = [
        { name: "Suman", math: 78, physics: 85, chemistry: 72 },
        { name: "Rafiq", math: 91, physics: 79, chemistry: 88 },
        { name: "Tamanna", math: 67, physics: 73, chemistry: 65 },
        { name: "Mehedi", math: 82, physics: 89, chemistry: 77 },
        { name: "Nishat", math: 95, physics: 91, chemistry: 84 },
        { name: "Fahima", math: 88, physics: 79, chemistry: 90 },
        { name: "Nahid", math: 76, physics: 68, chemistry: 72 },
        { name: "Arifa", math: 83, physics: 85, chemistry: 78 },
        { name: "Salim", math: 72, physics: 63, chemistry: 67 },
        { name: "Rina", math: 89, physics: 92, chemistry: 81 }
    ];
    return (
        <div className='py-10'>
            <LChart width={500} height={500} data={students}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                {/* <Line type="monotone" dataKey="uv" stroke="#8884d8" /> */}
                <Line type={'monotone'} dataKey='math' stroke='red'></Line>
                <Line type="bumpX" dataKey='physics' stroke='green'></Line>
                <Line type="monotoneY" dataKey='chemistry' stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;