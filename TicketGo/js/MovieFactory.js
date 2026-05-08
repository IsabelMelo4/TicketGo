class MovieFactory{
    static create(name, image,gender,duration){
        return new Movie(name, image, gender,duration );
    }
}