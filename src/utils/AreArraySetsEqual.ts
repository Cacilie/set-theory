export default function AreArraySetsEqual( A : unknown[] , B : unknown[]) : boolean {
    return A.every( a => {
        if( a instanceof Array){
            return  B.some( b => {
                if(b instanceof Array){
                    return AreArraySetsEqual(a, b)
                }
                return false
            })
        }else {
            return B.includes(a);
        }
    }) && B.every( b => {
        if(b instanceof Array){
            return A.some( a => {
                if(a instanceof Array){
                    return AreArraySetsEqual(b, a)
                }
                return false
            })
        }else {
            return A.includes(b)
        }
    })
}