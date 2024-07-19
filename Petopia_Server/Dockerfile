# Utiliza la imagen oficial de ASP.NET Core para .NET 8.0
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080

# Etapa de compilación y publicación
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src

# Copia el archivo de proyecto y restaura las dependencias
COPY ["Petopia_Server.csproj", "."]
RUN dotnet restore "./Petopia_Server.csproj"

# Copia la aplicación de backend al contenedor y realiza la compilación
COPY . .
WORKDIR "/src/."
RUN dotnet build "./Petopia_Server.csproj" -c $BUILD_CONFIGURATION -o /app/build

# Etapa de publicación
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./Petopia_Server.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

# Etapa final
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

# Establece el punto de entrada para ejecutar la aplicación
ENTRYPOINT ["dotnet", "Petopia_Server.dll"]