class Dog {
  constructor(
    private _dogName: string,
    private _age?: number,
    private _dogBreed?: string
  ) {}

  get dogName() {
    return this._dogName;
  }

  set dogName(val: string) {
    this._dogName = val;
  }

  printDog = (): void => {
    console.log(this._dogName, this._age, this._dogBreed);
  };
}

let puppy = new Dog("millet", 7, "mix");
puppy.dogName = "Millet";
puppy.printDog();
