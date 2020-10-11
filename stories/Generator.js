import React from 'react';


const LIGHT = '░';
const MEDIUM = '▒';
const DARK = '▓';

export default ({
    rows = 1000,
    lines = 60,
}) => {
    const matrix = [];
    for (let i = 0; i < lines; i ++) {
        const line = [];
        for (let j = 0; j < rows; j++) {
            let char = LIGHT;
            line.push(char);
        }
        matrix.push(line);
    }
    return (
      <div
      style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            fontFamily: 'Times New Roman',
            fontSize: '24px',
            lineHeight: '29px',
            color: 'grey',
            // lineHeight: 100 / lines + '%',
        }}>
      {
            matrix.map((line, index) => (
              <div
                  key={index}>
                  {
                        line.join('')
                    }
                </div>
            ))
        }

    </div>
);
    };
