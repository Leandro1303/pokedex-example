import PropTypes from 'prop-types';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale,
    Filler
} from 'chart.js'

import { Radar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';

import './pokeChart.styles.css'

ChartJS.register(
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale,
    Filler
)

const PokeChart = ({ data }) => {
    const [getData, setGetData] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            const newData = data.map((datas) => (datas.base_stat));
            setGetData(newData);
        };

        fetchData();
    }, []);

    const datas = {
        labels: ['HP', 'Atck', 'Def.', 'Sp. Atck', 'Sp. Def.', 'Spd'],
        datasets: [{
            label: "Stats",
            data: getData,
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
    };

    const options = {
        aspectRatio: 1,
        scales: {
            r: {
                max: 260,
                beginAtZero: true,
                ticks: {
                    display: false,
                    stepSize: 85,
                }
            },
        },
    };

    return (
        <div className='radar-container'>
            <Radar data={datas} options={options} />
        </div>
    );
};

PokeChart.propTypes = {
    data: PropTypes.array.isRequired,
};

export default PokeChart;
