class UsersController < ApplicationController
    def adduser
        username=params[:username]
        email =params[:email]
        password =params[:password]
        
        a=User.select(:id).where(username: username)
        b=User.select(:id).where(email: email)
        c=User.select(:id).where(password: password)
        if username!="" && email!="" && password!="" && a[0]==nil&&b[0]==nil&&c[0]==nil
            
            User.create(username: username,email: email, password: password)
            
            render :json => id1=User.select(:id).where(email: email)
        else
            render :json => 0
        end
        
    end
    def auth
        email =params[:email]
        password =params[:password]
        id1=User.select(:id).where(email: email)
        if id1!=[]
            pass1=User.select(:password).where(id: id1)
            
            if pass1[0].password==password
                render :json =>id1[0].id
            else
                render :json =>0
            end
        
        else
            render :json =>0
        end
    
        
        
    end
    def show
        render :json=>User.all
        
    end
    def del1
        m=params[:id]
        User.find(m).destroy
        
        render :json =>User.all
    end

    
end
