import React, { useEffect, useState } from 'react'

type Card = {
    num: number,
    suit: number
}

const App = () => {

    const [numbers] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    const [suits] = useState<string[]>(['♠', '♣', '♥', '♦']);

    const [num, setNum] = useState<number>(6);
    const [cards, setCards] = useState<Card[]>([]);


    const changeValue = (value: number) => {
        switch (value) {
            case 1: return 'A';
            case 11: return 'J';
            case 12: return 'Q';
            case 13: return 'K';
            default: return value;
        }
    }

    const handleChange = (e: any) => {
        setNum(parseInt(e.target.value));
    }

    const draw = (num: number) => {
        let newCards: Card[] = [];
        for (let i = 0; i < num; i++) {
            let rs = Math.floor(Math.random() * suits.length)
            let rn = Math.floor(Math.random() * numbers.length)
            newCards.push({ num: rn, suit: rs });
        }
        setCards(newCards);
    }

    return (
        <>
            <div style={{ width: '100%', height: '100vh', backgroundColor: 'green' }}>
                <input type="number" onChange={handleChange} min={1} max={13} value={num} />
                <button onClick={() => draw(num)}>Draw</button>
                <div className='d-flex' id="content">
                    {
                        cards.map(({ num, suit }, index) => {
                            return (
                                <div className='card m-2' style={{ width: '70px', fontSize: '20px' }} key={index}>
                                    <div className="card-body p-1 d-flex flex-column align-items-center">
                                        <span className={'d-flex align-self-start ' + (suit === 2 || suit === 3 ? 'text-danger' : '')}>{suits[suit]}</span>
                                        <span>{changeValue(numbers[num])}</span>
                                        <span className={'d-flex align-self-end ' + (suit === 2 || suit === 3 ? 'text-danger' : '')}>{suits[suit]}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default App