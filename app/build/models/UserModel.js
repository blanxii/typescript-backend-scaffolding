var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AutoIncrement, Column, Model, PrimaryKey, Table } from 'sequelize-typescript';
let UserModel = class UserModel extends Model {
};
__decorate([
    AutoIncrement,
    PrimaryKey,
    Column,
    __metadata("design:type", Number)
], UserModel.prototype, "id", void 0);
__decorate([
    Column,
    __metadata("design:type", String)
], UserModel.prototype, "name", void 0);
UserModel = __decorate([
    Table({
        timestamps: true,
        tableName: 'user',
        underscored: true,
    })
], UserModel);
export { UserModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlck1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9Vc2VyTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUNMLGFBQWEsRUFDYixNQUFNLEVBQ04sS0FBSyxFQUNMLFVBQVUsRUFDVixLQUFLLEVBQ04sTUFBTSxzQkFBc0IsQ0FBQTtBQU83QixJQUFhLFNBQVMsR0FBdEIsTUFBYSxTQUFVLFNBQVEsS0FBSztDQVduQyxDQUFBO0FBTkM7SUFIQyxhQUFhO0lBQ2IsVUFBVTtJQUNWLE1BQU07O3FDQUNvQjtBQUczQjtJQURDLE1BQU07O3VDQUNjO0FBUlYsU0FBUztJQUxyQixLQUFLLENBQUM7UUFDTCxVQUFVLEVBQUUsSUFBSTtRQUNoQixTQUFTLEVBQUUsTUFBTTtRQUNqQixXQUFXLEVBQUUsSUFBSTtLQUNsQixDQUFDO0dBQ1csU0FBUyxDQVdyQjtTQVhZLFNBQVMifQ==