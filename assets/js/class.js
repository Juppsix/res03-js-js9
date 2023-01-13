class Form{
    #fields;
    #submitted;
    
    constructor()
    {
        this.#fields = [];
    }
    
    addField(field)
    {
        
    }
    submit()
    {
        
    }
    validate()
    {
        
    }
    toJSON()
    {
        
    }
    
    
    get fields (){
        return this.#fields;
    }
    
    
    get submitted (){
        return this.#submitted;
    }

    set submitted (submitted){
        this.#submitted = submitted;
    }
}
class Field{
    #elements;
    #errors;
    #name;
    
    constructor(elements)
    {
        this.#elements = elements;
        this.#errors = [];
    }
    
    serialize()
    
    
}
class TextField extends Field {
    
    constructor()
    {
        
    }
    
    
    validate()
}
class EmailField extends Field {
    
    constructor()
    {
        
    }
    
    
    validate()
}
class PasswordField {
    
    constructor()
    {
        
    }
    
    
    validate()
}

export { Form };
export { Field };
export { TextField };
export { EmailField };
export { PasswordField };