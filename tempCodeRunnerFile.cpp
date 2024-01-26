#include <bits/stdc++.h>

using namespace std;

int main()
{
    
int t;
cin>>t;
while(t--){
    
    int n;
    cin>>n;
    
    string a,b,c;
    cin>>a;
    cin>>b;
    cin>>c;
    
    bool flag=false;
    
    for(int i=0;i<a.size();i++){
        
        if((a[i]==c[i]) || (b[i]==c[i])){
            flag=true;
            break;
        }
    }
    
    if(flag)cout<<"NO"<<endl;
    else cout<<"YES"<<endl;
}
}
