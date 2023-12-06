from rest_framework.views import APIView
from rest_framework.response import Response
import requests

class HelloWorldView(APIView):
    def get(self, request):
        recipe_id = request.headers.get('Recipe-ID')

        if not recipe_id:
            return Response({"error": "Recipe ID is required"}, status=400)

        api_url = f"https://api.spoonacular.com/recipes/{recipe_id}/information?includeNutrition=false&apiKey=a15d5ccf40414e79b58db4db072b75df"

        try:
            response = requests.get(api_url)

            if response.status_code == 200:
                return Response(response.json())
            else:
                return Response({"error": "External API request failed"}, status=response.status_code)
        except requests.exceptions.RequestException as e:
            return Response({"error": str(e)}, status=500)
