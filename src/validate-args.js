export const validateArguments = (args) => {
    return !(args.length > 3 || !args[2].startsWith('--username='))
      
   
}