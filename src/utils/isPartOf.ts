import areArraySetsEqual from "./areArraySetsEqual.ts";

export default function isPartOf(A: unknown | [], B: unknown[]): boolean {

    return B.some( m_b => {
        
        if(m_b instanceof Array){
            return areArraySetsEqual(m_b, A as Array<unknown>);
        }
        return m_b === A
    })
    
}

