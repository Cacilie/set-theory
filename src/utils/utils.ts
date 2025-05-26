// deno-lint-ignore-file
// deno-lint-ignore no-explicit-any

export default function array_to_set(array_set: any[]): Set<any> {

    let final_set = new Set();

    array_set.forEach(member => {
        let tmpSet = new Set();
        if (member.length === undefined) {
            let copy = member

            final_set.add(copy);

        } else {
            member.forEach((s_member: unknown) => {
                tmpSet.add(s_member)
            })

            final_set.add(tmpSet);
        }
    })

    return final_set;

}