// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerClass {
    constructor(props) {
        this.length = props.length;
        this.width = props.width;
        this.height = props.height;
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return (this.length * this.width) + (this.length * this.height) + (this.width * this.height);
    }
  }

class CubeMaker extends CuboidMakerClass {
    constructor(cubeProps) {
        super(cubeProps);
    }

    cubeVolume() {
        return Math.pow(this.length, 3);
    }

    cubeSurfaceArea() {
        return Math.pow(this.length, 2) * 6;
    }
}

const cuboidClass = new CuboidMakerClass({
    length: 15,
    width: 10,
    height: 22
})

const cube = new CubeMaker ({
    length: 12,
})
  

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log('cuboidClass volume: ', cuboidClass.volume()); // 3300
console.log('cuboidClass surfaceArea: ', cuboidClass.surfaceArea()); // 700

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

console.log('cube volume: ', cube.cubeVolume());
console.log('cube surfaceArea: ', cube.cubeSurfaceArea());