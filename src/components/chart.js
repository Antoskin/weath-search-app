import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    return _.round(_.sum(data)/data.length ) 
}

export default ({ data, color, units }) => (
        <div>
            <Sparklines height={100} width={150} data={data} >
                <SparklinesLine color={color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <article>{average(data)} {units} </article>
        </div>
)
