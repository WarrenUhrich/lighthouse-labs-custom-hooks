import React from 'react';
import CounterButton from './CounterButton';

const ManyCounters = () => {
    const counterData = [
        {initNum: 0, iterator: 1},
        {initNum: -100, iterator: 10},
        {initNum: 5, iterator: 15},
        {initNum: 209, iterator: 50},
        {initNum: 56, iterator: 200},
        {initNum: -9000, iterator: 1000}
    ];

    return (
        <section>
            <h2>Many Counters</h2>
            <ul>
                {counterData.map((counter, i) =>
                    <li key={i}>
                        <CounterButton {...counter} />
                    </li>
                )}
            </ul>
        </section>
    );
};

export default ManyCounters;