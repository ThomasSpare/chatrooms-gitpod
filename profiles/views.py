from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from django.contrib.auth import get_user_model
from .serializers import UserCreateSerializer, UserSerializer


class RegisterView(APIView):
    def post(self, request):
        data = request.data

        """ 
        first_name = data['first_name']
        last_name = data['last_name']
        email = data['email']
        password = data['password']
        """

        serializer = UserCreateSerializer(data=data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        user = serializer.create(serializer.validated_data)
        user = UserSerializer(user)

        return response(user.data, status=HTTP_201_CREATED)


class RetrieveUserView(APIView):
    permission_classes = (permissions.IsAuthenticated)

    def get(self, request):
        pass
