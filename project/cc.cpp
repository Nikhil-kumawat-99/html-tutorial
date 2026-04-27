#include <iostream>
using namespace std;
int main(){
    int MET101,PHT101,CHT102,HST101,CVT101,MAT101,HSL101,PHL101,WSL101;
    int pointMET,pointPHT,pointCHT,pointHST,pointCVT,pointMAT,pointHSL,pointPHL,pointWSL;
    int creditMET=3,creditPHT=3,creditCHT=3,creditHST=3,creditCVT=3,creditMAT=3,creditHSL=1,creditPHL=1,creditWSL=2;

    cout <<"enter mechanical ingineering's  marks:";
    cin >> MET101;
    if(MET101<=100 && MET101>90){
         pointMET=10;
    }
    else if(MET101<=90 && MET101>80){
        pointMET=9;
    }
    else if(MET101<=80 && MET101>70){
        pointMET=8;
    }
    else if(MET101<=70 && MET101>60){
        pointMET=7;
    }
    else if(MET101<=60 && MET101>50){
        pointMET=6;
    }
    else if(MET101<=50 && MET101>40){
        pointMET=5;
    }
    else{
        cout<<"back";
        return 1;
    }

    cout <<"enter engineering physics's  marks:";
    cin >> PHT101;
    if(PHT101<=100 && PHT101>90){
        pointPHT=10;
    }
    else if(PHT101<=90 &&PHT101>80){
        pointPHT=9;
    }
    else if(PHT101<=80 &&PHT101>70){
        pointPHT=7;
    }
    else if(PHT101<=70 &&PHT101>60){
        pointPHT=7;
    }
    else if(PHT101<=60 &&PHT101>50){
        pointPHT=6;
    }
    else if(PHT101<=50 &&PHT101>40){
        pointPHT=5;
    }
    else{
        cout<<"back";
        return 1;
    }
    cout <<"enter environmental studies's  marks:";
    cin >> CHT102;
    if(CHT102<=100 && CHT102>90){
        pointCHT=10;
    }
    else if(CHT102<=90 &&CHT102>80){
        pointCHT=9;
    }
    else if(CHT102<=80 &&CHT102>70){
        pointCHT=7;
    }
    else if(CHT102<=70 &&CHT102>60){
        pointCHT=7;
    }
    else if(CHT102<=60 &&CHT102>50){
        pointCHT=6;
    }
    else if(CHT102<=50 &&CHT102>40){
        pointCHT=5;
    }
    else{
        cout<<"back";
        return 1;
    }

    cout <<"enter English's  marks:";
    cin >> HST101;
    if(HST101<=100 && HST101>90){
        pointHST=10;
    }
    else if(HST101<=90 &&HST101>80){
        pointHST=9;
    }
    else if(HST101<=80 &&HST101>70){
        pointHST=7;
    }
    else if(HST101<=70 &&HST101>60){
        pointHST=7;
    }
    else if(HST101<=60 &&HST101>50){
        pointHST=6;
    }
    else if(HST101<=50 &&HST101>40){
        pointHST=5;
    }
    else{
        cout<<"back";
        return 1;
    }
    cout <<"enter engineering mechanics's  marks:";
    cin >> MET101;
    if(MET101<=100 && MET101>90){
        pointMET=10;
    }
    else if(MET101<=90 && MET101>80){
        pointMET=9;
    }
    else if(MET101<=80 && MET101>70){
        pointMET=8;
    }
    else if(MET101<=70 && MET101>60){
        pointMET=7;
    }
    else if(MET101<=60 && MET101>50){
        pointMET=6;
    }
    else if(MET101<=50 && MET101>40){
        pointMET=5;
    }
    else{
        cout<<"back";
        return 1;
    }
    cout <<"enter mathamatics 1's  marks:";
    cin >> MAT101;
    if(MAT101<=100 && MAT101>90){
        pointMAT=10;
    }
    else if(MAT101<=90 && MAT101>80){
        pointMAT=9;
    }
    else if(MAT101<=80 && MAT101>70){
        pointMAT=8;
    }
    else if(MAT101<=70 && MAT101>60){
        pointMAT=7;
    }
    else if(MAT101<=60 && MAT101>50){
        pointMAT=6;
    }
    else if(MAT101<=50 && MAT101>40){
        pointMAT=5;
    }
    else{
        cout<<"back";
        return 1;
    }
    cout <<"enter english lab's  marks:";
    cin >> HSL101;
    if(HSL101<=100 && HSL101>90){
        pointHSL=10;
    }
    else if(HSL101<=90 && HSL101>80){
        pointHSL=9;
    }
    else if(HSL101<=80 && HSL101>70){
        pointHSL=8;
    }
    else if(HSL101<=70 && HSL101>60){
        pointHSL=7;
    }
    else if(HSL101<=60 && HSL101>50){
        pointHSL=6;
    }
    else if(HSL101<=50 && HSL101>40){
        pointHSL=5;
    }
    else{
        cout<<"back";
        return 1;
    }
    cout <<"enter physics lab's  marks:";
    cin >> PHL101;
    if(PHL101<=100 && PHL101>90){
        pointPHL=10;
    }
    else if(PHL101<=90 && PHL101>80){
        pointPHL=9;
    }
    else if(PHL101<=80 && PHL101>70){
        pointPHL=8;
    }
    else if(PHL101<=70 && PHL101>60){
        pointPHL=7;
    }
    else if(PHL101<=60 && PHL101>50){
        pointPHL=6;
    }
    else if(PHL101<=50 && PHL101>40){
        pointPHL=5;
    }
    else{
        cout<<"back";
        return 1;
    }
    cout <<"enter workshop's  marks:";
    cin >> WSL101;
    if(WSL101<=100 && WSL101>90){
        pointWSL=10;
    }
    else if(WSL101<=90 && WSL101>80){
        pointWSL=9;
    }
     else if(WSL101<=80 && WSL101>70){
        pointWSL=8;
    }
     else if(WSL101<=70 && WSL101>60){
        pointWSL=7;
    }
     else if(WSL101<=60 && WSL101>50){
        pointWSL=6;
    }
     else if(WSL101<=50 && WSL101>40){
        pointWSL=5;
    }
    else{
        cout<<"back";
        return 1;
    }
    int totalpoint=pointMET+pointPHT+pointCHT+pointHST+pointCVT+pointMAT+pointHSL+pointPHL+pointWSL;
    int totalcredit=22;
    float cgpa=(pointMET*creditMET +pointPHT*creditPHT +pointCHT*creditCHT +pointHST*creditHST +pointCVT*creditCVT +pointMAT*creditMAT+pointHSL*creditHSL +pointPHL*creditPHL+pointWSL*creditWSL)/22;
    cout<<"cgpa is :"<<cgpa<<endl;
    return 0;


}