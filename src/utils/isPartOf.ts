import AreArraySetsEqual from "./AreArraySetsEqual.ts";

export default function isPartOf(A: unknown | [], B: unknown[]): boolean {

    return B.some( m_b => {
        
        if(m_b instanceof Array){
            return AreArraySetsEqual(m_b, A as Array<unknown>);
        }
        return m_b === A
    })
    
}

