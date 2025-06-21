import areArraySetsEqual from "./areArraySetsEqual.ts";

export default function isPartOf<T>(A: T | T[], B: T[]): boolean {

    return B.some( m_b => {
        
        if(m_b instanceof Array){
            return areArraySetsEqual(m_b, A as Array<T>);
        }
        return m_b === A
    })
    
}

