interface PossibleClassName {
    [key: string]: boolean
}

type GetClassNameValue = string | PossibleClassName

const getClassName = (classNames: GetClassNameValue[]) =>
    classNames.reduce((accum: string, value: GetClassNameValue) => {
        let classNamesChain = accum

        if (typeof value === 'object') {
            const values = Object.entries(value)

            values.forEach(([className, isNeeded]) => {
                if (isNeeded) {
                    classNamesChain = `${classNamesChain} ${className}`
                }
            })

            return classNamesChain
        }
        classNamesChain = `${classNamesChain} ${value}`

        return classNamesChain
    }, '')

export default getClassName
