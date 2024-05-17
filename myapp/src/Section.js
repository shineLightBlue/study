// import { LevelContext } from './LevelContext.js';

// export default function Section({ level, children }) {
//     return (
//         <section className="section">
//             <LevelContext.Provider value={level}>
//                 {children}
//             </LevelContext.Provider>
//         </section>
//     );
// }
import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Section({ children }) {
    const level = useContext(LevelContext);
    console.log(level)
    console.log(children)
    return (
        <section className="section">
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </section>
    );
}