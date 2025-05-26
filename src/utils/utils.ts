// deno-lint-ignore-file
// deno-lint-ignore no-explicit-any

export default function array_to_set(array_set: any[]): Set<any> {

    let final_set = new Set();

    array_set.forEach(member => {
        let tmpSet = new Set();

        if(member === null){
         final_set.add(new Set(null))   
        }
        else if (member.constructor !== Array) {
            let copy = member

            final_set.add(copy);

        } else if( member.constructor === Array &&  member.length) {
            member.forEach((s_member: unknown) => {
                if(s_member === null) {
                    tmpSet.add(new Set(null))
                }
                tmpSet.add(s_member)
            })

            final_set.add(tmpSet);
        }
    })

    return final_set;

}